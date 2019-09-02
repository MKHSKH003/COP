using System;
using System.Collections.Generic;

namespace COP.scafold
{
    public partial class Organisation
    {
        public int Id { get; set; }
        public byte[] Avatar { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string SocialIssue { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
    }
}
