require 'json'

puzzle_data = JSON.parse(File.read('../../puzzle.json'))
result_data = JSON.parse(File.read('../../result.json'))

linked_list = puzzle_data['linkedList']
top = puzzle_data['top']

top_node = linked_list.find { |node| node['id'] == top }

tree = []

def traverse(node, tree, linked_list)
    return if node.nil?

    tree.push(node['value'])
    traverse(linked_list.find { |n| n['id'] == node['next'] }, tree, linked_list)
end

traverse(top_node, tree, linked_list)

puts tree.to_s
puts 'Is solution correct?', JSON.generate(tree) == JSON.generate(result_data)
