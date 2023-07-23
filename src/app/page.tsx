
function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <a href="/r.jpg" download>Download Image</a><br/>
      <a href="/r.pdf" target="_blank" rel="noopener noreferrer">View PDF</a><br/>
      <video controls>
        <source src="a.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video><br/>
      <a href="/r.pdf" download>Download PDF</a><br/>
      <a href="/f1/p1.pdf" download>Download P1</a><br/>
      <a href="/f1/f2/p2.pdf" download>Download P2</a>
    </div>
  );
}

export default HomePage;