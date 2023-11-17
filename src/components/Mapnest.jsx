import React from "react";
import { Container } from "react-bootstrap";

function Mapnest({ text, color, setcolor }) {
  return (
    <>
      <section className="overflow-hidden">
        <Container>
          <div>
            {text.map((data) => {
              return (
                <div>
                  <h1>{data.text}</h1>
                  <div className="d-flex">
                    {data.buttun &&
                      data.buttun.map((hey) => (
                        <button className={hey.buttunclass}>{hey.btn} </button>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <input
              onChange={(e) => setcolor(e.target.value)}
              type="text"
              placeholder="black"
            />
            <p
              style={{
                color: `${color}`,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              omnis sit numquam nulla deleniti veniam officiis, quisquam
              consequuntur, odio vitae et eligendi, id natus perferendis
              delectus nihil eum cumque culpa?
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Mapnest;
