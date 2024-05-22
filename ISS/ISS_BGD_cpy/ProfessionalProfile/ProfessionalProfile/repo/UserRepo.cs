using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProfessionalProfile.DatabaseContext;
using ProfessionalProfile.Domain;

namespace ProfessionalProfile.Repo
{
    public class UserRepo : IUserRepoInterface
    {
        private readonly IDbContextFactory<DataContext> _contextFactory;    
        
        public UserRepo(IDbContextFactory<DataContext> contextFactory)
        {
            _contextFactory = contextFactory;
        }
        public void Add(User item)
        {
            try
            {
                using (var context = _contextFactory.CreateDbContext())
                {
                    context.User.Add(item);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Delete(int id)
        {
            try 
            {        
                using (var context = _contextFactory.CreateDbContext())
                {
                    var user = context.User.Find(id);
                    context.User.Remove(user);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ICollection<User> GetAll()
        {
            try
            {
                using (var context = _contextFactory.CreateDbContext())
                {
                    return context.User.ToList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public User GetById(int id)
        {
            try
            {
                using (var context = _contextFactory.CreateDbContext())
                {
                    return context.User.Find(id);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Update(User user)
        {
            try
            {
                using (var context = _contextFactory.CreateDbContext())
                {
                    context.User.Update(user);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
