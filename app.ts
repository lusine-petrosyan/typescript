class Singleton
{
    public static instance;

    constructor(test)
    {
        if (test !== Test)
        {
            throw new Error("Error: Instantiation failed. Singleton module! Use .getInstance() instead of new.");
        }
    }

    public static getInstance()
    {
        if (Singleton.instance == null)
        {
            // console.log("create new instance");
            Singleton.instance = new Singleton(Test);
        }else
        {
            // console.log("error");
        }
        return Singleton.instance;
    }
}

function Test()
{
}
Singleton.getInstance();
Singleton.getInstance();

// function Test1()
// {
// };
// let s = new Singleton(Test1); // it's will be error !!

