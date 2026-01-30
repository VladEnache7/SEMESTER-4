namespace District3API.RepoInterfaces
{
    public interface IRepoInterface<T>
    {
        public T GetById(int id);
        public ICollection<T> GetAll();
        public void Add(T item);
        public void Update(T item);
        public void Delete(int id);
    }
}
