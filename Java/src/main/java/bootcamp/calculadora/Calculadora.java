package bootcamp.calculadora;

public class Calculadora {
    public static void main(String [] args){
        float operando1 = Float.parseFloat(args[0]);
        float operando2 = Float.parseFloat(args[1]);
        OPERATORS operator = OPERATORS.valueOf(args[2]);
        final Calculadora calculadora = new Calculadora();
        System.out.println(calculadora.operar(operando1, operando2, operator));
    }

    private enum OPERATORS{
        SUM, RES, MUL, DIV;
    };


    /**
     * Sólo considero el caso en que el usuario ingresa bien los datos
     */
    private float operar(float op1, float op2, OPERATORS operator){
        switch(operator){
            case SUM -> {return sum(op1, op2);}
            case RES -> {return res(op1, op2);}
            case MUL -> {return mul(op1, op2);}
            default -> {return div(op1, op2);} // DIV
        }
    }

    private float sum(float op1, float op2){
        return op1 + op2;
    }

    private float res(float op1, float op2){
        return op1 - op2;
    }

    private float mul(float op1, float op2){
        return op1*op2;
    }

    private float div(float op1, float op2) throws ArithmeticException{
        return op1/op2;
    }
}
