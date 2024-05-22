using ProfessionalProfile.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProfessionalProfile.Repo
{
    public interface IUserRepoInterface
    {
        public User GetById(int id);
        public ICollection<User> GetAll();
        public void Add(User item);
        public void Update(User item);
        public void Delete(int id);
    }
}
