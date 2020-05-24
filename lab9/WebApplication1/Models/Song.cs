using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Song

    {
        
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required!")]
        [StringLength(50, ErrorMessage = "Maximal length of the Name of a song is 50 characters!")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Artist is required!")]
        [StringLength(50, ErrorMessage = "Maximal length of the Artist of a song is 50 characters!")]
        public string Artist { get; set; }
        [Required(ErrorMessage = "GenreID is required!")]
        [StringLength(20, ErrorMessage = "Maximal length of the GenreID of a song is 20 characters!")]

        public string GenreID { get; set; }
        
    }
}