import { Button, Field, Input } from '@/components'
import styles from './Signin.module.css'

const Signin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
       <h2>Welcome Back</h2>
       <p>Log in to your account</p>
       <form>
        <Field label='Username'>
         <Input placeholder='Username' />        
        </Field>
        <Field label='Password'>
         <Input placeholder='Password' />        
        </Field>
        <Button>Sign in</Button>
       </form>
      </div>
    </div>
  )
}

export default Signin
