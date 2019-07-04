class HelloWorld{
    public static hello(name?: string): string{
        if(name === undefined)
        {
            return "Hello, World!";
        }
        else {
            return "Hello, " + name + "!";
        }
    }
}

export default HelloWorld