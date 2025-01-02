export default function FormSection() {
    return (
      <section className="form-section">
        <h2>Form for Details</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Input your name" />
          </div>
          <div>
            <label>Place</label>
            <input type="text" placeholder="Input your address" />
          </div>
          <div>
            <label>State</label>
            <input type="text" placeholder="Input text" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Input text" />
          </div>
          <div>
            <label>Any Questions?</label>
            <textarea placeholder="Enter here"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
  