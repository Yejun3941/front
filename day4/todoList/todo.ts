type Todo={id:number,title:string,done:boolean};
let todoItems:Array<Todo>;

//api
function fetchTodoItems():Todo[]{
  const todos = [
    {id:1,title:"안녕",done:false},
    {id:2,title:"타입",done:false},
    {id:3,title:"스크립트",done:false},
  ]
  return todos
}

//CRUD method
function fetchTodos():Todo[]{
  const todos = fetchTodoItems();
  return todos
}

function addTodo(todo:Todo):void{
  todoItems.push(todo);
}

function deleteTodo(index:number){
  todoItems.splice(index,1);
}

function updateTodo(index:number){
  // todo.done = true;
  // todoItems.splice(index,1,todo)
  // 만약 하나의 식별자만 사용한다면
  let found_index_todo = todoItems.find(
    (item) =>{
    return item.id==index
  })
  if (found_index_todo===undefined) {
    return undefined
  }
  console.log("여기어디",found_index_todo)
  found_index_todo.done = true; //여기서 find로 나온 return 타입 지정 어케함?
}


//business logic
function logFirstTodo():Todo{ //첫번째 목록 반환
  return todoItems[0]
}

function showCompleted():Todo[]{
  return todoItems.filter((item)=>{
    return item.done
  })
}

function log():void{
  console.log(todoItems)
}

//TODO : addTodo()함수를 활용해 2개의 할일을 추가

function addTwoTodoItems():void{
  const item1={
    id:4,
    title:"item4",
    done:false
  }
  addTodo(item1);

  addTodo({
    id:5,title:"아이템5",done:true
  })
}

todoItems = fetchTodoItems();
// console.log(todoItems)
addTwoTodoItems();
log();
updateTodo(1)
let completedTodoList =  showCompleted()
console.log(completedTodoList)
log()