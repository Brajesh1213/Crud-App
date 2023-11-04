import Todo from "../Model/Todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
      done: false, // Assuming you have a "done" field in your Todo model
    });

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }};
  

export const toggleTodoDone = async (req, res) => {
  try {
    const todoId = req.params.id;

    // Find the Todo by ID
    const todo = await Todo.findById(todoId);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Toggle the "done" field
    todo.done = !todo.done;

    // Save the updated Todo (not needed when using findOneAndUpdate)

    // Update and save the Todo
    await todo.save();

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



export const updateTodo = async (req, res) => {
  try {
    
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id},
      { data: req.body.data },
      { new: true } // Return the updated document // ye chart gpt ka ka solution hai.

    );
    //fectch krna padega nhi to agar new ka use nhi kiye to
    //const todo = await Todo.findbyid(req.params.id);
      
    await todo.save();
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    
    const todo = await Todo.findByIdAndDelete(req.params.id);
   
      
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

