using District3API.domain;
using District3API.DataBaseContext;
using District3API.RepoInterfaces;

namespace District3API.Repos
{
    public class GroupRepository : IRepoInterface<Group>
    {
        private readonly DataContext _context;

        public GroupRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Group item)
        {
            _context.Group.Add(item);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var group = _context.Group.Find(id);
            if (group != null)
            {
                _context.Group.Remove(group);
                _context.SaveChanges();
            }
        }

        public ICollection<Group> GetAll()
        {
            return _context.Group.ToList();
        }

        public Group GetById(int id)
        {
            return _context.Group.Find(id);
        }

        public void Update(Group item)
        {
            _context.Group.Update(item);
            _context.SaveChanges();
        }
    }
}