import { Routes } from '@angular/router';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { PaginaSobreComponent } from './componentes/pagina-sobre/pagina-sobre.component';
import { MainComponent } from './main/main.component';
import { PaginaConteudoComponent } from './componentes/pagina-conteudo/pagina-conteudo.component';
import { PaginaComoajudarComponent } from './componentes/pagina-comoajudar/pagina-comoajudar.component';
import { PaginaContatoComponent } from './componentes/pagina-contato/pagina-contato.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';
import { PaginaCadastroComponent } from './componentes/pagina-cadastro/pagina-cadastro.component';
import { PaginaPrecadastroComponent } from './componentes/pagina-precadastro/pagina-precadastro.component';
import { DadosInstituicaoComponent } from './componentes/dados-instituicao/dados-instituicao.component';
import { DadosParceirosComponent } from './componentes/dados-parceiros/dados-parceiros.component';
import { DadosRepresentanteComponent } from './componentes/dados-representante/dados-representante.component';
import { DesativarContaComponent } from './componentes/desativar-conta/desativar-conta.component';
import { PontosArrecadacaoComponent } from './componentes/pontos-arrecadacao/pontos-arrecadacao.component';
import { DesativarParceiroComponent } from './componentes/desativar-parceiro/desativar-parceiro.component';
import { DadosRepresentanteParceiroComponent } from './componentes/dados-representante-parceiro/dados-representante-parceiro.component';
import { PontosArrecadacaoParceiroComponent } from './componentes/pontos-arrecadacao-parceiro/pontos-arrecadacao-parceiro.component';
import { FomeVotorantimNoticiaComponent } from './componentes/fome-votorantim-noticia/fome-votorantim-noticia.component';
import { AlimentosNoticiasComponent } from './componentes/alimentos-noticias/alimentos-noticias.component';
import { DoacaoNoticiasComponent } from './componentes/doacao-noticias/doacao-noticias.component';

export const routes: Routes = [
    {path: '', component: MainComponent },
    {path: 'pagina-sobre', component: PaginaSobreComponent },
    {path: 'pagina-conteudo', component: PaginaConteudoComponent },
    {path: 'pagina-comoAjudar', component: PaginaComoajudarComponent },
    {path: 'pagina-contato', component: PaginaContatoComponent},
    {path: 'pagina-login', component: PaginaLoginComponent},
    {path: 'pagina-preCadastro', component: PaginaPrecadastroComponent},
    {path: 'pagina-cadastro', component: PaginaCadastroComponent},
    {path: 'pagina-ong', component: DadosInstituicaoComponent},
    {path: 'pagina-parceiros', component: DadosParceirosComponent},
    {path: 'pagina-representante', component: DadosRepresentanteComponent},
    {path: 'pagina-RepresentanteParceiros', component: DadosRepresentanteParceiroComponent},
    {path: 'pagina-pontosArrecadacao', component: PontosArrecadacaoComponent},
    {path: 'pagina-pontosArrecadacaoParceiros', component: PontosArrecadacaoParceiroComponent},
    {path: 'pagina-desativarOng', component: DesativarContaComponent},
    {path: 'pagina-desativarParceiro', component: DesativarParceiroComponent},
    {path: 'noticia-fomeVotorantim', component: FomeVotorantimNoticiaComponent},
    {path: 'noticia-alimentos', component: AlimentosNoticiasComponent},
    {path: 'noticia-doacao', component: DoacaoNoticiasComponent},





];
