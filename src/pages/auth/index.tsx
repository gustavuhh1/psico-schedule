import logo from '../../assets/psico-logo.png'
import styles from './styles.module.css'

export function Auth() {
  return (
    <>
      <div id="app">
        <div className={styles.container}>
          <img src={logo} alt="" />

          <h2>PsicoSchedule</h2>
          <button>Entrar</button>
          <p>Não nos conhecemos ainda?</p>
          <button>Crie sua conta</button>
        </div>
      </div>
    </>
  );
}
