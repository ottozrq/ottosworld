from flask import Flask, render_template
from flask_assets import Environment, Bundle


app = Flask(__name__)
assets = Environment(app)
app.debug = True


@app.route("/")
def index():
    return render_template('index.html')


# Pages for photos
@app.route("/photo")
def photo():
    return render_template('photo.html')


@app.route("/video")
def video():
    return render_template('video.html')


@app.route("/fashion")
def fashion():
    return render_template('fashion.html')


@app.route("/wedding")
def wedding():
    return render_template('wedding.html')


@app.route("/contact")
def contact():
    return render_template('contact.html')


@app.route("/visuals")
def visuals():
    return render_template('visuals.html')


# Pages for IT
@app.route("/it")
def it():
    return render_template('it.html')


@app.route("/it/policy/snoji/en")
def snoji_policy_en():
    return render_template('policy/snoji_en.html')


@app.route("/it/policy/snoji/zh")
def snoji_policy_zh():
    return render_template('policy/snoji_zh.html')


@app.route("/it/policy/snoji/fr")
def snoji_policy_fr():
    return render_template('policy/snoji_fr.html')


# Page for about
@app.route("/about")
def okr():
    return render_template('okr.html')


js_bundle = Bundle('js/jquery-3.2.1.min.js', 'js/bootstrap.js', 'js/velocity.min.js',
                   filters='jsmin', output='js/ottosworld.min.js')

css_bundle = Bundle('css/bootstrap.min.css', 'fonts/Raleway.css',
                    filters='cssmin', output='css/ottosworld.min.css')

assets.register('js', js_bundle)
assets.register('css', css_bundle)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002)
