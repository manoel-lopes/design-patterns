# Monostate - Creational (Criação)

## Intenção

*Esconder o fato de que  a  classe somente opera com uma instância única  de dados usando  membros  estáticos. Por isso, todos os membros de um Monostate são estáticos  e todas  as  suas  instâncias  usam  esse  dado  estático. As aplicações  que  usam  o  padrão  Monostate,  podem criar qualquer número de instâncias que desejarem e cada uma delas usará o mesmo dado.*

---

## Destilando a intenção

O padrão Monostate é outra maneira de se  obter  singularidade. Foi  descrito pela primeira vez em 1996 na revista C++ Reports , funcionando por meio de um mecanismo completamente diferente como um “modelo conceitual do Singleton”. O interessante  deste  padrão  é  que quando uma classe é “Monostate”, evita-se qualquer  complicação  sobre ter acesso a uma particular instância da classe, pois qualquer uma é tão boa quanto as outras.

---

## Consequências

O que é bom ou ruim no Monostate:

**Bom:**
- A  transparência  para  os  usuários é completa mesmo sendo usado um objeto implementando este padrão, ou seja o comportamento é o mesmo;
- As classes derivadas de um Monostate também são Monostate, todas as classes derivadas  de  um  Monostate  fazem  parte  de um mesmo Monostate. Todas elas compartilham as mesmas variáveis estáticas;
- Como os métodos não são estáticos eles podem ser sobrescritos em uma classe derivada, e o legal disso é  que  várias  classes  derivadas  podem  oferecer diversos comportamentos diferentes mas usando as propriedades estáticas;

**Ruim:**
- Uma classe que não é Monostate  não  pode  ser  convertida  em  uma  classe Monostate por derivação;
- Como  se  trata  de  um  objeto  real, um  Monostate pode passar por muitas criações e destruições. Frequentemente, essas operações são dispendiosas;
