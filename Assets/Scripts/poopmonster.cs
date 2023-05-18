using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class poopmonster : MonoBehaviour
{
    // Start is called before the first frame update
    public float speed = 0.4f;
    public float rotation_damping = 4f;
    public Camera ARCamera;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        var rotation = Quaternion.LookRotation(ARCamera.transform.position - this.transform.position);
        this.transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * rotation_damping);
        // this.transform.position = transform.position + Vector3.up +speed +Time.deltaTime;

    }
}
