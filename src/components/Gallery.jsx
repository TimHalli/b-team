import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [image, setImg] = useState("");
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    {
      src:
        "https://daniellatto.co.uk/wp-content/uploads/2019/02/Marketing-Ideas.jpg",
      flag: true,
    },
    {
      src:
        "https://vuzopedia.ru/storage/app/uploads/public/5a8/c40/43a/5a8c4043a325c601575627.jpg",
      flag: false,
    },
    {
      src:
        "https://www.yplins.ru/data/catalog/catalog_firms_77/186511_823737507.jpg",
      flag: false,
    },
  ]);

  const styles = {
    maxWidth: "60%",
    textAlign: "center",
    justifyContent: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
  };

  const addImage = () => {
    if (image.length > 1) {
      const objects = [];
      let obj = {};

      for (let i = 0; i < images.length; i++) {
        obj = { ...images[i], flag: false };
        objects.push(obj);
      }
      setImages([...objects, { src: image, flag: true }]);
    }
  };

  const selectImg = (n) => {
    const objects = [...images];

    objects.map((obj, i) => {
      if (n === i) {
        obj.flag = true;
      } else {
        obj.flag = false;
      }
    });

    setImages([...objects]);
  };

  const onAdd = (e) => {
    setImg(e.target.value);
  };

  useEffect(() => {
    selectImg(index);
  }, [index]);

  const next = () => {
    if (index === images.length - 1) {
      selectImg(index);
      setIndex(0);
    } else if (index < images.length) {
      selectImg(index + 1);
      setIndex((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (index > 0) {
      selectImg(index - 1);
      setIndex((prev) => prev - 1);
    } else if (index === 0) {
      setIndex((prev) => prev + images.length - 1);
      selectImg(() => index + images.length - 1);
    }
  };

  return (
    <div>
      <br />

      <div style={styles} className="form-group">
        <input
          onChange={onAdd}
          type="text"
          placeholder=" Insert image from URL..."
          className="form-control-file"
          id="exampleInputFile"
          aria-describedby="fileHelp"
        />
        <button
          onClick={addImage}
          type="button"
          className="btn btn-primary btn-lg btn-block"
        >
          Add image
        </button>

        <small id="fileHelp" className="form-text text-muted">
          Upload image to gallery
        </small>
      </div>

      <div
        style={styles}
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          {images.map((img, i) => (
            <li
              onClick={() => setIndex(i)}
              className={img.flag ? "active" : ""}
              key={i + img}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              id={`li-${1}`}
            ></li>
          ))}
        </ol>
        <div id="img-div" className="carousel-inner">
          {images.map((img, i) => {
            // setIndex(i)
            return (
              <div
                key={i}
                className={img.flag ? "carousel-item active" : "carousel-item"}
              >
                <img
                  width="100%"
                  height="100%"
                  src={img.src}
                  className="d-block w-100"
                  alt="..."
                  id={`img-${i + 1}`}
                />
              </div>
            );
          })}
        </div>
        <a className="carousel-control-prev" role="button" data-bs-slide="prev">
          <span
            onClick={previous}
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span onClick={previous} className="visually-hidden">
            Previous
          </span>
        </a>
        <a className="carousel-control-next" role="button" data-bs-slide="next">
          <span onClick={next} className="visually-hidden">
            Next
          </span>
          <span
            onClick={next}
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </div>
  );
}
