using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TypescriptDemo.Models
{
    public class ProductAttributeDto
    {
        public int Id { get; set; }
        public int FK_ProductId { get; set; }
        public string AttributeName { get; set; }
        public string AttributeValue { get; set; }

        public ProductDto Product { get; set; }
    }
}