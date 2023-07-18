import { render } from "@testing-library/react";
import VisiMisiSection from "../component/visiMisi/visiMisiSection";
import { BrowserRouter as Router } from "react-router-dom";

describe('Visi and Misi', () => {
  const mockDataVisi = "Lorem ipsum" 
  const mockDataMisi = "Lorem ipsum" 

  test('should show visi misi', () => {
    render(
      <Router>
        <VisiMisiSection visi={mockDataVisi} misi={mockDataMisi}/>
      </Router>
    )
  })
})