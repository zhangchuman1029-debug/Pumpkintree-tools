from flask import Flask, request, send_file
from pdf2docx import Converter
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# 获取当前脚本所在的文件夹路径
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@app.route('/convert', methods=['POST'])
def convert_pdf_to_docx():
    if 'file' not in request.files:
        return "No file", 400
    
    pdf_file = request.files['file']
    
    # 使用绝对路径，确保文件一定能存下且能找到
    pdf_path = os.path.join(BASE_DIR, "temp.pdf")
    docx_path = os.path.join(BASE_DIR, "output.docx")
    
    # 如果旧文件存在，先删掉，防止冲突
    if os.path.exists(docx_path):
        os.remove(docx_path)
    
    pdf_file.save(pdf_path)
    
    try:
        # 开始转换
        cv = Converter(pdf_path)
        cv.convert(docx_path, start=0, end=None)
        cv.close()
        
        # 检查文件是否真的生成了
        if not os.path.exists(docx_path):
            return "转换失败：文件未生成", 500
            
        return send_file(docx_path, as_attachment=True)
    except Exception as e:
        return f"转换出错: {str(e)}", 500
    finally:
        # 转换完清理掉临时的 PDF 文件（可选）
        if os.path.exists(pdf_path):
            os.remove(pdf_path)

if __name__ == '__main__':
    # 建议开启 debug 模式，这样报错会更详细
    app.run(port=5001, debug=True)