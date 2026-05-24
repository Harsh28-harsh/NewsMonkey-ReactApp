import React from "react";

const Newsitem = (props) => {
  
    let { title, description, imageurl, url, author, date, source } =
      props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "20rem" }}>
          <img
            src={
              !imageurl
                ? "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/wm/2026/02/command-prompt-showing-ip-address.png?w=1600&h=900&fit=crop"
                : imageurl
            }
            className="card-img-top"
            alt=""
          />

          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
