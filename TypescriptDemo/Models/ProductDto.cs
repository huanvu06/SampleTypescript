using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TypescriptDemo.Models
{
    public class ProductDto
    {
        public ProductDto()
        {
            UpdatedDate = DateTime.Now.AddDays(-Id);
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public float UnitPrice { get; set; }
        public DateTime UpdatedDate { get; set; }

        public List<ProductAttributeDto> Attributes { get; set; }
    }
}