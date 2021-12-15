import s from './Error.module.css';

const ErrorView = () => {
  return (
    <>
      <p className={s.errorDesc}>Извините, по Вашему запросу ничего не найдено! Попробуйте изменить запрос.</p>
    </>  
  )
}

export default ErrorView;