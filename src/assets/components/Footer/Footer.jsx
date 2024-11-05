// components/Footer.jsx
function Footer({ count, filter, setFilter, clearCompleted }) {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> item{count !== 1 ? 's' : ''} left
        </span>
  
        <ul className="filters">
          <li>
            <button
              className={filter === 'all' ? 'selected' : ''}
              onClick={() => setFilter('all')}
            >All</button>
          </li>
          <li>
            <button
              className={filter === 'active' ? 'selected' : ''}
              onClick={() => setFilter('active')}
            >Active</button>
          </li>
          <li>
            <button
              className={filter === 'completed' ? 'selected' : ''}
              onClick={() => setFilter('completed')}
            >Completed</button>
          </li>
        </ul>
  
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
  
  export default Footer;
  