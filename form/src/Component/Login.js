import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

function Login({ setPass , check, password, obj, setLogin ,setpassword, setUser , setCheck , user , pass}) {
  
  console.log(obj)

  const handleChange=(e)=>{
    setUser(e.target.value)
  }
 const handlePass=(e)=>{
   setPass(e.target.value)
 }
 
 const handleSubmit=(event)=> {
  event.preventDefault()
 setCheck(user)
 setpassword(pass)
 const authenticate =()=>{
  if(obj.username === check && obj.password === password ){
    return true
  }
  else {
    return false
  }
 }
 
 const valid = authenticate();
   if(valid === true){
    setLogin(false)
   }else{
    setLogin(true)
   
   }

  };
 
  return (
    <Form>
      <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username"   onChange={handleChange} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePass}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
  );
}

export default Login;