function MoveMe() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <iframe
                src="https://app.moveme.tv/"
                width="100%"
                height={800}
                style={{
                    borderRadius: "15px",
                    marginBottom: "100px",
                    marginTop: "40px",
                    border: "2px",
                }}
                title="MoveMe.tv"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default MoveMe;
