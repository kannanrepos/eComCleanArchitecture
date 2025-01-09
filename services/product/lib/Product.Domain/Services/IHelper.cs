using System;

namespace Product.Domain.Services;

public interface IHelper
{
  string Decrypt(string cipherText, string key, string iv);
}
