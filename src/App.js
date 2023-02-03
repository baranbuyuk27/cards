import 'bulma/css/bulma.css'
import './App.css';
import Course from './Course';
import Angular from './images/angular.png';
import Bootstrap from './images/bootstrap.jpeg';
import Csharp from './images/csharp.png';
import Kompleweb from './images/komple.jpeg';

function App() {
  return (

    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Kurslarım          </p>

        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              <Course
                image={Angular}
                title="Angular"
                description="Angular, TypeScript ile yazılmış açık kaynaklı bir JavaScript framework’üdür . 
                Angular Google tarafından desteklenir ve birincil amacı tek sayfalık uygulamalar geliştirmektir. Bir framework olarak Angular,
                 geliştiricilerin birlikte çalışması için standart bir yapı sağlarken açık avantajlara sahiptir. Kullanıcıların sürdürülebilir bir
                 şekilde büyük uygulamalar oluşturmasını sağlar. "></Course>
            </div>
            <div className='column'>
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Bootstrap, HTML, CSS ve JavaScript ile yazılmış kullanışlı, yeniden kullanılabilir kod parçalarından oluşan dev bir koleksiyondur. 
                Ayrıca, geliştiricilerin ve tasarımcıların hızla tam olarak duyarlı web siteleri oluşturmasını sağlayan bir frameworktür.  "></Course>
            </div>
            <div className='column'>
              <Course
                image={Csharp}
                title="Csharp"
                description="C#; Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. Sözdizimi C-like bir deneyim sunar. 
                Microsoft tarafından geliştirilmiş olsa da ECMA ve ISO standartları altına alınmıştır. C programlama dilinde bir tam sayı değişkeni 1 artırmak için 
                değişkenden sonra ++ eki kullanılır    "
              />
            </div>
            <div className='column'>
              <Course
                image={Kompleweb}
                title="Frontend"
                description="    
                Bir web geliştiricisi, istemci-sunucu modeli kullanarak World Wide Web uygulamalarının geliştirilmesinde uzmanlaşmış 
                veya özel olarak ilgilenen bir programcıdır . Uygulamalar genellikle istemcide, PHP, ASP'de HTML, CSS ve JavaScript kullanır."></Course>
            </div>
          </div>
        </section>

      </div>
    </div>

  );
}

export default App;
