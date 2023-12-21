import "../../css/errorPage.css";
function ErrorPage(props) {
  const { errorMsg, btnText, href } = props;
  return (
    <main className="errorPage">
      <p className="error">{errorMsg}</p>
      <a className="backBtn" href={href}>
        {btnText}
      </a>
    </main>
  );
}

export default ErrorPage;
