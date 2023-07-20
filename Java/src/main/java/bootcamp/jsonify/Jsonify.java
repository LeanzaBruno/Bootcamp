package bootcamp.jsonify;

import java.util.Arrays;

public class Jsonify {
    public static void main(String[] args) {
        new Jsonify().printAsJSON(args);
    }

    private void printAsJSON(String [] args){
        System.out.println(
                new StringBuilder()
                    .append("{\"data\":[")
                    .append( String.join(",", Arrays.stream(args).map(arg -> '"' + arg + '"').toList()))
                    .append("]}")
        );
    }
}