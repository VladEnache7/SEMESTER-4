function DeepSearch() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                marginBottom: "10px",
            }}
        >
            <iframe
                src="https://deepsearch.mycelebs.com/movie"
                width="100%"
                height={700}
                style={{
                    borderRadius: "15px",
                    marginBottom: "100px",
                    border: "2px",
                }}
                title="MoveMe.tv"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default DeepSearch;
