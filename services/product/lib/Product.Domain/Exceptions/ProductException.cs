
namespace Product.Domain.Exceptions;
public class ProductException(string message) : Exception(message) { }

public class ProductNotfoundException(string Id) : ProductException($"Requested Product Notfound with the Id:{Id}") { }

public class CategoryNotfoundException(string Id) : ProductException($"Requested Category Notfound with the Id:{Id}") { }

public class BrandNotfoundException(string Id) : ProductException($"Requested Brand Notfound with the Id:{Id}") { }

public class ProductAlreadyExistsException(string SKU) : ProductException($"Product with SKU:{SKU} already exists") { }

public class CategoryAlreadyExistsException(string Name) : ProductException($"Category with Name:{Name} already exists") { }

public class BrandAlreadyExistsException(string Name) : ProductException($"Brand with Name:{Name} already exists") { }


