using System.Security.Cryptography;
using System.Text;

namespace Product.Domain.Shared;

public class EncrptionHelper
{

  public static string Encrypt(string plainText, string key, string iv)
  {
    using Aes aesAlg = Aes.Create();
    aesAlg.Key = Encoding.UTF8.GetBytes(key);  // 16 bytes key for AES-128
    aesAlg.IV = Encoding.UTF8.GetBytes(iv);    // 16 bytes IV (Initialization Vector)

    ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

    using MemoryStream msEncrypt = new();
    using (CryptoStream csEncrypt = new(msEncrypt, encryptor, CryptoStreamMode.Write))
    {
      using StreamWriter swEncrypt = new(csEncrypt);
      swEncrypt.Write(plainText);
    }

    byte[] encryptedBytes = msEncrypt.ToArray();
    string encryptedBase64 = Convert.ToBase64String(encryptedBytes);

    // Make it URL-safe
    string urlSafeEncrypted = encryptedBase64.Replace("+", "-").Replace("/", "_").TrimEnd('=');

    return urlSafeEncrypted;
  }

  // Method to decrypt an encrypted text string
  public static string Decrypt(string cipherText, string key, string iv)
  {
    // Convert URL-safe base64 back to standard base64
    string base64CipherText = cipherText.Replace("-", "+").Replace("_", "/");

    // Add padding back if necessary
    int paddingLength = base64CipherText.Length % 4;
    if (paddingLength > 0)
    {
      base64CipherText = base64CipherText.PadRight(base64CipherText.Length + (4 - paddingLength), '=');
    }

    byte[] cipherBytes = Convert.FromBase64String(base64CipherText);

    using Aes aesAlg = Aes.Create();
    aesAlg.Key = Encoding.UTF8.GetBytes(key);  // 16 bytes key for AES-128
    aesAlg.IV = Encoding.UTF8.GetBytes(iv);    // 16 bytes IV

    ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

    using MemoryStream msDecrypt = new MemoryStream(cipherBytes);
    using CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read);
    using StreamReader srDecrypt = new StreamReader(csDecrypt);
    return srDecrypt.ReadToEnd();
  }
}
