using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TypescriptDemo.Models
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float UnitPrice { get; set; }

        public List<ProductAttributeDto> Attributes { get; set; }
    }
}