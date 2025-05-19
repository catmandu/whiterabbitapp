import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const Redirect = (e) => {
    e.preventDefault();
    navigate('/package');
  };
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='title'>
          <span>Sign in</span>
        </div>
        <p className='title_para'>Please enter your details to sign in.</p>

        <form onSubmit={Redirect}>
          <div className='row'>
            {/* <i className="fas fa-user"></i> */}
            <input type='text' placeholder='Enter your email...' required />
          </div>
          <div className='row'>
            {/* <i className="fas fa-lock"></i> */}
            <input type='password' placeholder='Password' required />
          </div>
          {/* <div className='pass'>
            <a href='#'>Forgot password?</a>
          </div> */}
          <div className='row button'>
            <input type='submit' value='Login' />
          </div>
          {/* <div className='signup-link'>
            Not a member? <a href='#'>Signup now</a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
