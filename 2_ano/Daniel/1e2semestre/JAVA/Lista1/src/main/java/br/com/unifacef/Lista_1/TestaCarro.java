/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.unifacef.Lista_1;

import javax.swing.JOptionPane;

/**
 *
 * @author pedro
 */
public class TestaCarro {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Carro obj1 = new Carro();
        obj1.Marca = "chevrolet";
	obj1.Modelo = "onix";
	obj1.Ano = 2018;
	obj1.Motor = false;
	obj1.VelAtual = 0;
        //Tudo na base de classe
        System.out.println("obj1: Ano: " + obj1.Ano + " Marca: " + obj1.Marca + 
        "Modelo: " + obj1.Modelo + " Motor: " + obj1.Motor + " Velocidae: " + obj1.VelAtual);
        
        // Classe JOptionaPane mostra uma janela com a mensagem indicada
        JOptionPane.showMessageDialog(null, "obj1: Ano: " + obj1.Ano + " Marca: " + obj1.Marca + 
        "Modelo: " + obj1.Modelo + " Motor: " + obj1.Motor + " Velocidae: " + obj1.VelAtual);
        
	Carro obj2 = new Carro();
        obj2.Marca = "Fiat";
	obj2.Modelo = "Palio";
	obj2.Ano = 2016;
	obj2.Motor = true;
	obj2.VelAtual = 40;
        System.out.println("obj2: Ano: " + obj2.Ano + " Marca: " + obj2.Marca + 
        "Modelo: " + obj2.Modelo + " Motor: " + obj2.Motor + " Velocidae: " + obj2.VelAtual);
    }   
}
