const App = () => {
  return (
    <div>
      <div>Slot Machines</div>
      <Machine 
        s1={"\u{1F34D}"}
        s2={"\u{1F352}"}
        s3={"\u{1F34C}"}
      />
      <Machine 
        s1={"\u{1F34D}"}
        s2={"\u{1F34D}"}
        s3={"\u{1F34D}"}
      />
      <Machine 
        s1={"\u{1F34D}"}
        s2={"\u{1F34C}"}
        s3={"\u{1F352}"}
      />
      <Machine
        s1={"🍌"}
        s2={"🍌"}
        s3={"⭐"}
      />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('id'));