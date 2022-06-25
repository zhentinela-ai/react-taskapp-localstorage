export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
  };

  return (
    <div className="">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setShowCompleted(e.target.checked);
        }}
        button
      />
      <label>Show Tasks Done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
