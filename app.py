from flask import Flask, request, jsonify, send_from_directory
from generate_release_checklist import generate_release_checklist

app = Flask(__name__, static_folder="web", static_url_path="")

@app.route("/")
def home():
    return send_from_directory("web", "index.html")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.json

    template = data.get("template")
    cases = data.get("cases")
    output = data.get("output")

    if not template or not cases or not output:
        return jsonify({"error": "Missing required fields"}), 400

    case_list = [c.strip() for c in cases.replace("\n", ",").split(",") if c.strip()]

    try:
        generate_release_checklist(template, case_list, output)
        return jsonify({"success": True})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)