using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Genre
    {
        public int Id { set; get; }
        [Required(ErrorMessage = "Name is required!")]
        [StringLength(50, ErrorMessage = "Maximal length of the Name of a genre is 50 characters!")]
        public string Name { set; get; }
        public ICollection<Song> Songs { set; get; }
    }
}