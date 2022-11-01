const FormThongTin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form
        className="needs-validation"
        action="https://docs.google.com/forms/d/e/1FAIpQLSd6l2rYinCC0wJv-tBWnMO6wSScuHA5tKZVBqvO7nHw-NHXoQ/formResponse"
      >
        <div className="input-group">
          <label htmlFor="entry.1213263972">Nhap ten</label>
          <input type="text" name="entry.1213263972" required />
          <div className="invalid-feedback">yeu cau</div>
        </div>

        <label htmlFor="entry.100333566">Nhap sdt</label>
        <input type="text" name="entry.100333566" required />

        <label htmlFor="entry.1193537808">Nhap binh luan</label>
        <input type="text" name="entry.1193537808" required />

        <button type="submit">Dang ky</button>
      </form>

      
    </div>
  );
};
export default FormThongTin;

{
  /* <form
className="needs-validation"
action="https://docs.google.com/forms/d/e/1FAIpQLSd6l2rYinCC0wJv-tBWnMO6wSScuHA5tKZVBqvO7nHw-NHXoQ/formResponse"
>
<label htmlFor="entry.1213263972">Nhap ten</label>
<input type="text" name="entry.1213263972" required />
<div className="invalid-tooltip">yeu cau</div>

<label htmlFor="entry.100333566">Nhap sdt</label>
<input type="text" name="entry.100333566" required />

<label htmlFor="entry.1193537808">Nhap binh luan</label>
<input type="text" name="entry.1193537808" required />

<button type="submit">Dang ky</button>
</form> */
}
