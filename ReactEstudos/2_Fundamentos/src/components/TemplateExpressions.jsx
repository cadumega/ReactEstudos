const TemplateExpressions = () => {
    const name = "Cadu"
    const data = {
        age:31,
        job: "Programmer",
    }

    return (
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você atua como: {data.job}</p>
        </div>
    )
};

export default TemplateExpressions