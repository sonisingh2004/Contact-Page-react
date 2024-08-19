import styles from './Frame.module.css'
import call from './images/call.png'
import msg from './images/message.png'
import service from './images/service.png'

function Frame() {
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
                        <button>
                            <img src={msg} />
                            VIA SUPPORT CHAT
                        </button>
                        <button>
                            <img src={call} />
                            VIA CALL
                        </button>
                    </div>
                    <button>
                        <img src={msg} /> VIA EMAIL FORM
                    </button>
                    <form>
                        <input type="text" placeholder="NAME" />
                        <input type="text" placeholder="EMAIL" />
                        <input type="textarea" placeholder="TEXT" />
                        <button>SEND MESSAGE</button>
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
