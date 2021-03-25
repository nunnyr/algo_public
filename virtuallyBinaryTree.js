/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
 class Solution {
    solve(root, target) {
        //n nodes whose values are 1 to n
        //the root has a value of 1, its left child is 2 and 
        //right is 3
        //return whether target exists in root
        //create helper function
        let flag = false

        function search(node,target){
            //if there is no node then return. just stop
            if(!node) return

            if(node.val === target){
               flag = true
            }

            //handle down the left side
            if(node.left){
                search(node.left, target)
            }
            //handle the right side
            if(node.right){
                search(node.right, target)
            }
        }
        search(root, target)
        return flag
    }
}

//################################################################
class Solution {
    solve(root, target) {
        if (root === null) {
            return false;
        }
        if (root.val === target) {
            return true;
        }
        
        return this.solve(root.left, target) || this.solve(root.right, target)
    }
}

//##########################################################################


class Solution{
    solve(root, target){
        //let flag = false
        
        return !root ? false : null

        return root.val === target ?  true : null

        return this.solve(root.left, target) || this.solve(root.right, target)



    }

}
