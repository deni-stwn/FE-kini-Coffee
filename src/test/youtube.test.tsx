import React from "react";
import { render, screen } from "@testing-library/react";
import YoutubeSection, {
  youtubeProps,
} from "../component/youtube/youtubeSection";

const mockData: youtubeProps["data"] = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: "thumbnail1.jpg",
    URL: "https://www.example.com/video1",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: "thumbnail2.jpg",
    URL: "https://www.example.com/video2",
  },
];

// "@testing-library/react-hooks": "^8.0.1",

describe("YoutubeSection", () => {
  test("renders without error", () => {
    render(
      <YoutubeSection
        data={mockData}
        youtubeUserName="example"
        loading={false}
      />
    );
  });

  test("displays the correct number of videos", () => {
    render(
      <YoutubeSection
        data={mockData}
        youtubeUserName="example"
        loading={false}
      />
    );
    const videoElements = screen.getAllByRole("link");
    expect(videoElements.length).toBe(mockData?.length);
  });
});
