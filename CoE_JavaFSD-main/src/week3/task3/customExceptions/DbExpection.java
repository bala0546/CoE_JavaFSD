package week3.task3.customExceptions;

public class DbExpection extends RuntimeException {
    public DbExpection(String message) {
        super(message);
    }

    public DbExpection(String message, Throwable cause) {
        super(message, cause);
    }
}



