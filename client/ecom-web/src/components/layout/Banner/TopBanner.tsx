'use client';
import { useEffect, useState } from 'react';
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
} from '@microsoft/signalr';
import { Button } from '@/components/ui/button';

const TopBanner = () => {
  const [messages, setMessages] = useState<string | null>(null);
  const [connection, setConnection] = useState<HubConnection | null>(null);
  useEffect(() => {
    let mounted = true;
    const startConnection = async () => {
      const connect = new HubConnectionBuilder()
        .withUrl(
          `${process.env.NEXT_PUBLIC_NOTIFICATION_API_URL}/notificationHub`,
          {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
            withCredentials: false,
          }
        )
        .withAutomaticReconnect([0, 2000, 5000, 10000, 20000])
        .configureLogging(LogLevel.Information)
        .build();

      try {
        await connect.start();
        connect.on('NotificationMessage', (content: string) => {
          if (mounted) {
            setMessages(content);
          }
        });
        if (mounted) {
          setConnection(connect);
        }
      } catch (err) {
        console.error('SignalR Connection Error:', err);
      }
    };
    startConnection();
    return () => {
      mounted = false;
      if (connection) {
        connection.off('NotificationMessage');
        connection.stop();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Remove connection dependency to prevent re-renders
  return messages ? (
    <div className="bg-accent/20  text-center px-2 py-2 sm:px-4 xl:px-0">
      <div className="relative max-w-frame mx-auto">
        <p className="text-xs sm:text-sm">{messages}</p>
        <Button
          variant="ghost"
          className="hover:bg-transparent text-primary absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="close banner"
          onClick={() => setMessages('')}
        >
          X
        </Button>
      </div>
    </div>
  ) : null;
};
export default TopBanner;
