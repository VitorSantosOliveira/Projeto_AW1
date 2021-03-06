<!-- menu.html desenvolvido por: João Vitor de Souza Lima. -->

<!DOCTYPE html>
<html lang="en">

<!-- Adicionando título,referenciando arquivo CSS e criando search na estrutura head  -->
<head>
    <link href="../css/menu.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu-Projeto_AW1</title>
	   <script src="https://kit.fontawesome.com/1634beaf53.js" crossorigin="anonymous"></script>
</head>

    <!-- Abrindo corpo do código -->
    <body>
	<br>
    <!-- Abertura do cabeçalho da página -->
    <header>
		<!-- Atribuindo funcionalidade ao logo da FDUSP -->
        <div>
            <a href="../html/menu.html"><img src="../imagens/topo_home.gif"></a>
        </div>
        <div>
			<!-- Criando botão de Login -->
            <h1> FDUSP</h1>
            <a href="../html/login.html"><button>Login</button></a>
        </div>
		<!-- Criando formulário de search -->
        <form action = "#" method="post">
            <input type="text" name="search" id="search" placeholder="Faça sua Busca" required>
            <button type"submit"><i class="fas fa-search"></i></button> 
        </form>
    </header>
    <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
			
			 <!-- Adicionando botões ao menu -->
            <tr>
               <td><a href="AFaculdade.html"><img src="../imagens/bt_internas_facul.gif"></a></td>
                <td><a href="Departamentos.html"><img src="../imagens/bt_internas_departamentos.gif"></a></td>
                <td><a href="Docente.html"><img src="../imagens/bt_internas_docentes.gif"></a></td>
                <td><a href="Biblioteca.html"><img src="../imagens/bt_internas_biblioteca.gif"></a></td>
                <td><a href="Graduação.html"><img src="../imagens/bt_internas_graduacao.gif"></a></td>
                <td><a href="Pósgraduação.html"><img src="../imagens/bt_internas_pos.gif" ></a></td>
                <td><a href="Pesquisa.html"><img src="../imagens/bt_internas_pesquisa.gif"></a></td>
                <td><a href="Extensão.html"><img src="../imagens/bt_internas_extensao.gif"></a></td>
                <td><a href="Intranet.html"><img src="../imagens/bt_internas_intranet.gif"></a></td>
            </tr>
    </table>
            
	<!-- Fechando estruturas -->
	</body>

</html>
