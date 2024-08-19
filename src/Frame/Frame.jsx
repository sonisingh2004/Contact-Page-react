import { useState } from 'react'
import styles from './Frame.module.css'
import call from './images/call.png'
import msg from './images/message.png'
import msg1 from './images/message2.png'
import service from './images/service.png'

function Frame() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [issubmit, setIsSubmit] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault()
        setIsSubmit(true)
    }
    function buttonClick() {
        alert('Button clicked')
    }
    return (
        <div className={styles.main}>
            <div className={styles.submain}>
                <div className={styles.title}>CONTACT US</div>
                <div className={styles.subtitle}>
                    LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR
                    FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT
                    TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM
                    OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.forms}>
                    <div className={styles.buttons}>
                        <button onClick={buttonClick}>
                            <img src={msg} />
                            VIA SUPPORT CHAT
                        </button>
                        <button onClick={buttonClick}>
                            <img src={call} />
                            VIA CALL
                        </button>
                    </div>
                    <button onClick={buttonClick} className={styles.Mailbutton}>
                        <img src={msg1} /> VIA EMAIL FORM
                    </button>
                    <form>
                        <div className={styles.controlform}>
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={handleName}
                            />
                        </div>
                        <div className={styles.controlform}>
                            <label>Email</label>
                            <input
                                type="text"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        <div className={styles.controlform}>
                            <label>Text</label>
                            <textarea
                                type="text"
                                value={message}
                                onChange={handleMessage}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <button onClick={onSubmit}>Submit</button>
                        </div>
                        {issubmit && (
                            <div className={styles.details}>
                                <div>Name: {name}</div>
                                <div>Email: {email}</div>
                                <div>Message: {message}</div>
                            </div>
                        )}
                    </form>
                </div>
                <div className={styles.service}>
                    <img src={service} />
                </div>
            </div>
        </div>
    )
}
export default Frame
