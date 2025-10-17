import 'dart:convert';
// ignore: depend_on_referenced_packages
import 'package:http/http.dart' as http;
import '../models/user.dart';

class UserService {
  final String baseUrl = 'http://10.0.2.2:3000/api/usuaris'; // Android emulator

  // Obtener todos los usuarios
  Future<List<User>> obtenirUsuaris() async {
    final response = await http.get(Uri.parse(baseUrl));
    if (response.statusCode == 200) {
      final List data = json.decode(response.body);
      return data.map((u) => User.fromJson(u)).toList();
    } else {
      throw Exception('Error al cargar usuarios');
    }
  }

  // Crear un usuario
  Future<User> afegirUsuari(User user) async {
    final response = await http.post(
      Uri.parse(baseUrl),
      headers: {"Content-Type": "application/json"},
      body: json.encode(user.toJson()),
    );
    if (response.statusCode == 201) {
      return User.fromJson(json.decode(response.body));
    } else {
      throw Exception('Error al crear usuario');
    }
  }
}
